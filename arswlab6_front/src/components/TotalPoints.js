// src/components/TotalPoints.js

import React from 'react';
import Blueprint from '../api/Blueprint';

const TotalPoints = () => {
    const { totalPoints } = Blueprint;

    return (
        <div className="text-center total-points">
            <span id="blueprintsPointsLabel">Total User Points:</span>
            <span id="totalPoints" className="label label-success">
                {totalPoints}
            </span>
        </div>
    );
};

export default TotalPoints;
