import React, { useState } from 'react';

const BoxGenerator = () => {
const [color, setColor] = useState('');
const [size, setSize] = useState(100);
const [boxes, setBoxes] = useState([]);

const handleAddBox = (e) => {
    e.preventDefault();
    if (color && size) {
    const newBox = { color, size: parseInt(size) };
    setBoxes([...boxes, newBox]);
      //se  restablece los valores de entrada después de un envío exitoso.
    setColor('');
    setSize(100);
    }
    };

    return (
    <div>
    <form onSubmit={handleAddBox}>
        <label>
        Color:
        <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            />
        </label>
        <label>
        Tamaño:
        <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
        />
        </label>
        <button type="submit">Agregar</button>
        </form>
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {boxes.map((box, index) => (
        <div
            key={index}
            style={{
        backgroundColor: box.color,
        width: `${box.size}px`,
        height: `${box.size}px`,
        margin: '10px',
            }}
        ></div>
        ))}
        </div>
    </div>
    );
};

export default BoxGenerator;
