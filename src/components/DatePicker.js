import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers({date,setDate,title,datte}) {
  const classes = useStyles();

  return (
    <form   className={classes.container} noValidate>
      <TextField
        required 
       size="small"
        id="date"
        fullWidth
        label={title}
        type="date"
        variant="outlined"
        name={datte}
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        defaultValue="2021-01-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
