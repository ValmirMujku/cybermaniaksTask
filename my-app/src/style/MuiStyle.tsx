 
import { makeStyles } from 'tss-react/mui';

 const allstyles = makeStyles()((theme)=>({

    // mybutton: {
    //     size:'large',
    //     fontSize:'1.2rem',
        
    //     [theme.breakpoints.up('sm')]: {
    //         fontSize:'1.5rem',
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         fontSize:'1.9rem',
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         fontSize:'2.2rem',
    //     },
    // },

    centerFlexBox:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    submitFormElements:{
        margin:20,
         width:'20vw'
    }

}));
 
export { allstyles };