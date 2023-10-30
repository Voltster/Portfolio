// Mob-Nav

export const menuSlide = {
    initial:{
        x:"100%"
    },
    enter:{
        x:"-20%",
        transition:{duration:0.6, ease: [0.45, 0, 0.55, 1]}
    },
    exit:{
        x: "80%",
        transition:{duration:0.6, ease: [0.45, 0, 0.55, 1]}
     }
}
export const slide = {
    initial:{
        x:"80px"
    },
    enter: (i)=>(
        {
            x:"0",
            transition:{duration:0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
            
        }
    ),
    exit:(i)=>(
        {
        x: "80px",
        transition:{duration:0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
        
        }
    )
}


// skill section

export const icon = {
    initial:{

        opacity:0
    },
    whileInView: (i)=>(
        {
            opacity:1,
            transition:{duration:0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
            
        }
    )
}


// Service

export const card ={
    initial:{
        x:0, 
        opacity:0
    },
    whileInView: (i)=>(
        {   
            y:[150,0],     
            opacity:1,
            transition:{duration:0.8, ease: [0.45, 0, 0.55, 1], delay: 0.05*i}
            
        }
    )

}