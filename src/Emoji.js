import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import emoji from './noto-color-emoji-regular.json';
//import emoji from './helvetiker_regular.typeface.json';

extend({ TextGeometry });

export default function Text() {
  const font = new FontLoader().parse(emoji);
  return (
    <mesh>
      <textGeometry args={["9", {font, size: 10, height: 10}]}/>
      <meshPhysicalMaterial attach='material' color={'white'}/>
    </mesh>
  )
}