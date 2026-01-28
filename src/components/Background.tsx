import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const StarField = () => {
    const ref = useRef<THREE.Group>(null);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={50} depth={50} count={800} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const CameraController = () => {
    useFrame((state) => {
        // Subtle mouse parallax
        const { mouse, camera } = state;
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.05);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 2, 0.05);
        camera.lookAt(0, 0, 0);
    });
    return null;
}

export const Background: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                    <color attach="background" args={['#020205']} />
                    <fog attach="fog" args={['#020205', 10, 25]} />
                    <StarField />
                    <CameraController />
                </Canvas>
            </div>

            {/* Film Grain Overlay */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-60" />
        </div>
    );
};
