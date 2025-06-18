export let vehiculos = [
    {
        equipo: "Red Bull Racing",
        modelo: "RB21",
        motor: "Honda RBPT",
        velocidad_maxima_kmh: 365,
        aceleracion_0_100: 2.4,
        pilotos: [1, 2], // Max Verstappen y Sergio Pérez
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 325,
                consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.3 },
                desgaste_neumaticos: { seco: 1.4, lluvioso: 0.7, extremo: 2.3 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 345,
                consumo_combustible: { seco: 2.3, lluvioso: 2.5, extremo: 2.9 },
                desgaste_neumaticos: { seco: 2.1, lluvioso: 1.1, extremo: 3.3 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 305,
                consumo_combustible: { seco: 1.5, lluvioso: 1.7, extremo: 2.0 },
                desgaste_neumaticos: { seco: 0.9, lluvioso: 0.4, extremo: 1.7 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png"
    },
    {
        equipo: "Mercedes-AMG Petronas",
        modelo: "W16",
        motor: "Mercedes",
        velocidad_maxima_kmh: 360,
        aceleracion_0_100: 2.5,
        pilotos: [3, 4], // Lewis Hamilton y George Russell
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 320,
                consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
                desgaste_neumaticos: { seco: 1.5, lluvioso: 0.8, extremo: 2.4 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 340,
                consumo_combustible: { seco: 2.5, lluvioso: 2.7, extremo: 3.1 },
                desgaste_neumaticos: { seco: 2.2, lluvioso: 1.3, extremo: 3.6 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 300,
                consumo_combustible: { seco: 1.6, lluvioso: 1.8, extremo: 2.1 },
                desgaste_neumaticos: { seco: 1.0, lluvioso: 0.5, extremo: 1.8 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png"
    },
    {
        equipo: "Ferrari",
        modelo: "SF-25",
        motor: "Ferrari",
        velocidad_maxima_kmh: 358,
        aceleracion_0_100: 2.55,
        pilotos: [5, 6], // Charles Leclerc y Carlos Sainz
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 318,
                consumo_combustible: { seco: 1.95, lluvioso: 2.15, extremo: 2.45 },
                desgaste_neumaticos: { seco: 1.55, lluvioso: 0.85, extremo: 2.55 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 338,
                consumo_combustible: { seco: 2.55, lluvioso: 2.75, extremo: 3.15 },
                desgaste_neumaticos: { seco: 2.25, lluvioso: 1.35, extremo: 3.75 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 298,
                consumo_combustible: { seco: 1.65, lluvioso: 1.85, extremo: 2.15 },
                desgaste_neumaticos: { seco: 1.05, lluvioso: 0.55, extremo: 1.85 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png"
    },
    {
        equipo: "McLaren",
        modelo: "MCL39",
        motor: "Mercedes",
        velocidad_maxima_kmh: 356,
        aceleracion_0_100: 2.6,
        pilotos: [7, 8], // Lando Norris y Oscar Piastri
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 316,
                consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
                desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 336,
                consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
                desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 296,
                consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
                desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png"
    },
    {
        equipo: "Aston Martin",
        modelo: "AMR26",
        motor: "Mercedes",
        velocidad_maxima_kmh: 354,
        aceleracion_0_100: 2.65,
        pilotos: [9, 10], // Fernando Alonso y Lance Stroll
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 314,
                consumo_combustible: { seco: 2.05, lluvioso: 2.25, extremo: 2.55 },
                desgaste_neumaticos: { seco: 1.65, lluvioso: 0.95, extremo: 2.65 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 334,
                consumo_combustible: { seco: 2.65, lluvioso: 2.85, extremo: 3.25 },
                desgaste_neumaticos: { seco: 2.35, lluvioso: 1.45, extremo: 3.85 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 294,
                consumo_combustible: { seco: 1.75, lluvioso: 1.95, extremo: 2.25 },
                desgaste_neumaticos: { seco: 1.15, lluvioso: 0.65, extremo: 1.95 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/aston-martin.png"
    },
    {
        equipo: "Alpine",
        modelo: "A526",
        motor: "Renault",
        velocidad_maxima_kmh: 352,
        aceleracion_0_100: 2.7,
        pilotos: [11, 12], // Esteban Ocon y Pierre Gasly
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 312,
                consumo_combustible: { seco: 2.1, lluvioso: 2.3, extremo: 2.6 },
                desgaste_neumaticos: { seco: 1.7, lluvioso: 1.0, extremo: 2.7 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 332,
                consumo_combustible: { seco: 2.7, lluvioso: 2.9, extremo: 3.3 },
                desgaste_neumaticos: { seco: 2.4, lluvioso: 1.5, extremo: 3.9 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 292,
                consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.3 },
                desgaste_neumaticos: { seco: 1.2, lluvioso: 0.7, extremo: 2.0 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/alpine.png"
    },
    {
        equipo: "Alfa Romeo",
        modelo: "C46",
        motor: "Ferrari",
        velocidad_maxima_kmh: 351,
        aceleracion_0_100: 2.75,
        pilotos: [13, 14], // Valtteri Bottas y Zhou Guanyu
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 311,
                consumo_combustible: { seco: 2.15, lluvioso: 2.35, extremo: 2.65 },
                desgaste_neumaticos: { seco: 1.75, lluvioso: 1.05, extremo: 2.75 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 331,
                consumo_combustible: { seco: 2.75, lluvioso: 2.95, extremo: 3.35 },
                desgaste_neumaticos: { seco: 2.45, lluvioso: 1.55, extremo: 3.95 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 291,
                consumo_combustible: { seco: 1.85, lluvioso: 2.05, extremo: 2.35 },
                desgaste_neumaticos: { seco: 1.25, lluvioso: 0.75, extremo: 2.05 }
            }
        },
        imagen: "https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/alfa-romeo-c43-f1-2023-soymotor_5.png.webp?itok=i_vjuylh"
    },
    {
        equipo: "Haas",
        modelo: "VF-26",
        motor: "Ferrari",
        velocidad_maxima_kmh: 350,
        aceleracion_0_100: 2.8,
        pilotos: [15, 16], // Kevin Magnussen y Nico Hülkenberg
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 310,
                consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.7 },
                desgaste_neumaticos: { seco: 1.8, lluvioso: 1.1, extremo: 2.8 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 330,
                consumo_combustible: { seco: 2.8, lluvioso: 3.0, extremo: 3.4 },
                desgaste_neumaticos: { seco: 2.5, lluvioso: 1.6, extremo: 4.0 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 290,
                consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
                desgaste_neumaticos: { seco: 1.3, lluvioso: 0.8, extremo: 2.1 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/haas.png"
    },
    {
        equipo: "AlphaTauri",
        modelo: "AT07",
        motor: "Honda RBPT",
        velocidad_maxima_kmh: 353,
        aceleracion_0_100: 2.68,
        pilotos: [17, 18], // Yuki Tsunoda y Daniel Ricciardo
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 313,
                consumo_combustible: { seco: 2.08, lluvioso: 2.28, extremo: 2.58 },
                desgaste_neumaticos: { seco: 1.68, lluvioso: 0.98, extremo: 2.68 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 333,
                consumo_combustible: { seco: 2.68, lluvioso: 2.88, extremo: 3.28 },
                desgaste_neumaticos: { seco: 2.38, lluvioso: 1.48, extremo: 3.88 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 293,
                consumo_combustible: { seco: 1.78, lluvioso: 1.98, extremo: 2.28 },
                desgaste_neumaticos: { seco: 1.18, lluvioso: 0.68, extremo: 1.98 }
            }
        },
        imagen: "https://graphics.thomsonreuters.com/data/f1/images/cars2021/38kfl4num7fguk2s16bgw1f1m.png"
    },
    {
        equipo: "Williams",
        modelo: "FW48",
        motor: "Mercedes",
        velocidad_maxima_kmh: 352,
        aceleracion_0_100: 2.72,
        pilotos: [19, 20], // Alexander Albon y Logan Sargeant
        rendimiento: {
            conduccion_normal: {
                velocidad_promedio_kmh: 312,
                consumo_combustible: { seco: 2.12, lluvioso: 2.32, extremo: 2.62 },
                desgaste_neumaticos: { seco: 1.72, lluvioso: 1.02, extremo: 2.72 }
            },
            conduccion_agresiva: {
                velocidad_promedio_kmh: 332,
                consumo_combustible: { seco: 2.72, lluvioso: 2.92, extremo: 3.32 },
                desgaste_neumaticos: { seco: 2.42, lluvioso: 1.52, extremo: 3.92 }
            },
            ahorro_combustible: {
                velocidad_promedio_kmh: 292,
                consumo_combustible: { seco: 1.82, lluvioso: 2.02, extremo: 2.32 },
                desgaste_neumaticos: { seco: 1.22, lluvioso: 0.72, extremo: 2.02 }
            }
        },
        imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/williams.png"
    }
];