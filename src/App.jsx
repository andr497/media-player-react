import React, {useMemo} from 'react';
import Container from "@mui/material/Container";

import epica from './music/epica-universal_death_squad.mp3'
import honor from './music/Honor for all - Jon Licht and Daniel Licht.mp3'
import money from './music/y2mate.com - Hannibal Leq  Money HD.mp3'
import metal_gear
    from './music/y2mate.com - Metal Gear Rising Revengeance Stains of Time ExtendedMonsoon Boss Battle_320kbps.mp3'
import yomi from './music/Yomi Yori Kikoyu Koukoku no tou to honoo no kanojo.mp3'

import epicaImg from './images/epica.jpg'
import honorImg from './images/Honor for all.jpg'
import moneyImg from './images/money.jpg'
import metal_gearImg from './images/metal_gear.jpg'
import yomiImg from './images/yomi.jpg'
import AudioPlayer from "./components/AudioPlayer";
import {Alert, AlertTitle} from "@mui/material";

function App() {
    //Usamos "useMemo" para evitar la recalculacion del array y no volver a renderizar si no hay cambios
    let songs = useMemo(
        () => [
            {
                title: "Universal death squad",
                artist: "EPICA",
                cover: epicaImg,
                audio: epica
            },
            {
                title: "Honor for all",
                artist: "John Licht & Daniel Licht",
                cover: honorImg,
                audio: honor
            },
            {
                title: "Money",
                artist: "Hannibal Leq",
                cover: moneyImg,
                audio: money
            },
            {
                title: "Stains of Time",
                artist: "Agenda MIX (OST Metal Gear Rising Revenge)",
                cover: metal_gearImg,
                audio: metal_gear
            },
            {
                title: "Yomi Yori Kikoyu Koukoku no tou to honoo no kanojo",
                artist: "Imperial Circus Dead Decadence",
                cover: yomiImg,
                audio: yomi
            }
        ], []
    )

    if (songs.length === 0) {
        return (
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <Alert severity="error">
                    <AlertTitle>Aviso</AlertTitle>
                    No se encontraron canciones — <strong>Agrega unas cuantas</strong>
                </Alert>
            </Container>
        );
    }

    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <AudioPlayer
                songs={songs}
            />
        </Container>
    );
}

export default App;
