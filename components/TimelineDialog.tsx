import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function TimelineDialog({company,title,image,desc,open,onClose}:any) {
    const [openD,setOpenD] = useState(open)

    useEffect(()=>{
        setOpenD(open)
        console.log(openD)
    },[open])
  return (
    <>
    <Dialog
        
        open={openD}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        {company}
      </Dialog>
    </>
  )
}
