// src/api/Blueprint.js

import apiclient from './apiclient';
import { EventEmitter } from 'events';

class BlueprintAPI extends EventEmitter {
    constructor() {
        super();
        this.blueprints = [];
        this.totalPoints = 0;
    }

    /**
     * Actualiza los blueprints para un autor específico.
     * @param {string} author - Nombre del autor.
     */
    async actualizarPlanos(author) {
        if (!author) {
            alert("Por favor, ingresa un nombre de autor.");
            return;
        }

        try {
            const blueprintsList = await apiclient.getBlueprintsByAuthor(author);
            if (blueprintsList.length === 0) {
                alert("No se encontraron blueprints para el autor especificado.");
                this.blueprints = [];
                this.totalPoints = 0;
                this.emit('change'); // Notifica a los componentes que hay un cambio
                return;
            }

            this.blueprints = blueprintsList.map(bp => ({
                nombre: bp.name,
                puntos: bp.points.length
            }));

            this.totalPoints = this.blueprints.reduce((acc, bp) => acc + bp.puntos, 0);
            this.emit('change'); // Notifica a los componentes que hay un cambio
        } catch (error) {
            console.error("Error al actualizar los planos:", error);
            alert("Hubo un error al obtener los blueprints. Por favor, intenta nuevamente.");
        }
    }

    /**
     * Maneja la acción de dibujar o abrir un plano específico.
     * @param {string} planoNombre - Nombre del plano a dibujar.
     */
    dibujarPlano(planoNombre) {
        alert(`Abrir plano: ${planoNombre}`);
        // Aquí puedes implementar la lógica para dibujar o abrir el plano
    }
}

// Crear una instancia de BlueprintAPI
const blueprintInstance = new BlueprintAPI();

// Exportar la instancia para que pueda ser utilizada en otros módulos
export default blueprintInstance;

