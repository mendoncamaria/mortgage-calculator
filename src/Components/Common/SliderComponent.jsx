import { Slider, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types"

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

SliderComponent.propTypes = {
  amount: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.any,
  max: PropTypes.any,
  min: PropTypes.any,
  onChange: PropTypes.any,
  steps: PropTypes.any,
  unit: PropTypes.any,
  value: PropTypes.any
}

export default SliderComponent;
