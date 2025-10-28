"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // --- Nucleus ---
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff176,
      emissive: 0xfff59d,
      emissiveIntensity: 0.6,
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // --- Electrons ---
    const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const electronMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb74d,
      emissive: 0xffcc80,
      emissiveIntensity: 0.8,
    });

    const electrons: THREE.Mesh[] = [];
    const orbitRadius = [1, 1.5, 2];
    orbitRadius.forEach((radius) => {
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);
      electron.position.set(radius, 0, 0);
      scene.add(electron);
      electrons.push(electron);
    });

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // --- Animation ---
    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      angle += 0.02;

      electrons.forEach((electron, i) => {
        const radius = orbitRadius[i];
        electron.position.x = Math.cos(angle * (i + 1)) * radius;
        electron.position.z = Math.sin(angle * (i + 1)) * radius;
      });

      nucleus.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize handler ---
    const handleResize = () => {
      if (!mount) return;
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full  h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-transparent "
    />
  );
}
