import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
      width: '100%',
      borderRadius: 15,
      margin: '40px 0 50px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
    },
    heading: {
      color: '#2bc4ba',
      fontSize: '50px',
      fontWeight: 'bold',
    },
    image: {
      marginLeft: '15px',
    },
  }));