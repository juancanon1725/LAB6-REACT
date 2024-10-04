// src/components/BlueprintTable.js

import React from 'react';
import Blueprint from '../api/Blueprint';

const BlueprintTable = () => {
    const { blueprints } = Blueprint;

    if (blueprints.length === 0) {
        return <p>No se encontraron blueprints.</p>;
    }

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th className="text-center">Blueprint Name</th>
                <th className="text-center">Number of Points</th>
                <th className="text-center">Open</th>
            </tr>
            </thead>
            <tbody>
            {blueprints.map((bp, index) => (
                <tr key={index}>
                    <td className="text-center">{bp.nombre}</td>
                    <td className="text-center">{bp.puntos}</td>
                    <td className="text-center">
                        <button
                            className="btn btn-secondary"
                            onClick={() => Blueprint.dibujarPlano(bp.nombre)}
                        >
                            Open
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default BlueprintTable;
