"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Nucleus (central sphere) - yellow
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff176, // yellow
      emissive: 0xfff59d,
      emissiveIntensity: 0.6,
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Electrons (small spheres) - soft orange
    const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const electronMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb74d, // soft orange
      emissive: 0xffcc80,
      emissiveIntensity: 0.8,
    });

    const electrons: THREE.Mesh[] = [];
    const orbitRadius = [1, 1.5, 2]; // distances from nucleus
    orbitRadius.forEach((radius) => {
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);
      electron.position.set(radius, 0, 0);
      scene.add(electron);
      electrons.push(electron);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation
    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      angle += 0.02;

      // Rotate electrons around nucleus
      electrons.forEach((electron, i) => {
        const radius = orbitRadius[i];
        electron.position.x = Math.cos(angle * (i + 1)) * radius;
        electron.position.z = Math.sin(angle * (i + 1)) * radius;
      });

      // Optional: nucleus slowly rotates
      nucleus.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[60vh] mt-10 bg-transparent" />;
}
