import Slider from '@mui/material/Slider';
import {Stack, Tooltip, useTheme} from "@mui/material";
import {VolumeDownRounded, VolumeUpRounded} from "@mui/icons-material";

function ValueLabelComponent(props) {
    const { children, value } = props;

    return(
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    )
}

const VolumenSlider = ({lightIconColor, volumen, onChangeVolumen}) => {
    const theme = useTheme();

    return(
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
                valueLabelDisplay="auto"
                aria-label="Volume"
                defaultValue={100}
                onChange={(e) => onChangeVolumen(e)}
                components={{
                    ValueLabel: ValueLabelComponent,
                }}
                sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                    '& .MuiSlider-track': {
                        border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                        width: 24,
                        height: 24,
                        backgroundColor: '#fff',
                        '&:before': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible, &.Mui-active': {
                            boxShadow: 'none',
                        },
                    },
                }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
            {volumen}
        </Stack>
    )
}

export default VolumenSlider;
