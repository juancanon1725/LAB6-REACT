// src/App.js

import React, { useEffect, useState } from 'react';
import Blueprint from './api/Blueprint'; // Importar la instancia de Blueprint
import BlueprintForm from './components/BlueprintForm';
import BlueprintTable from './components/BlueprintTable';
import TotalPoints from './components/TotalPoints';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

function App() {
    const [blueprints, setBlueprints] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        // Definir la función que maneja los cambios en los blueprints
        const handleChange = () => {
            setBlueprints(Blueprint.blueprints);
            setTotalPoints(Blueprint.totalPoints);
        };

        // Suscribirse al evento 'change'
        Blueprint.on('change', handleChange);

        // Limpiar la suscripción al desmontar el componente
        return () => {
            Blueprint.off('change', handleChange);
        };
    }, []);

    return (
        <div className="container">
            <div className="page-header">
                <h1>Blueprints</h1>
            </div>
            <BlueprintForm />
            <BlueprintTable blueprints={blueprints} />
            <TotalPoints totalPoints={totalPoints} />
        </div>
    );
}

export default App;

