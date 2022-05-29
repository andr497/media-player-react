import Box from "@mui/material/Box";
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import IconButton from "@mui/material/IconButton";

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick,
    mainColor
}) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1
        }}>
            <IconButton onClick={onPrevClick}>
                <FastRewindRounded fontSize="large" htmlColor={mainColor} />
            </IconButton>
            {
                isPlaying ? (
                    <IconButton
                        onClick={() => onPlayPauseClick(false)}
                    >
                        <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainColor} />
                    </IconButton>
                ) : (
                    <IconButton
                        onClick={() => onPlayPauseClick(true)}
                    >
                        <PlayArrowRounded sx={{ fontSize: '3rem' }} htmlColor={mainColor} />
                    </IconButton>
                )
            }
            <IconButton onClick={onNextClick}>
                <FastForwardRounded fontSize="large" htmlColor={mainColor} />
            </IconButton>
        </Box>
    );
}

export default AudioControls;