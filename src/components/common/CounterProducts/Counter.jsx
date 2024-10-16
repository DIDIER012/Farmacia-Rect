import { Button } from "@mui/material";  

const Counter = ({ suma, resta, contador, onAdd }) => {  
    return (  
        <div className="flex flex-col items-center gap-5">  
            <div className="flex gap-5 items-center">  
                <Button variant="contained" onClick={resta}>  
                    -  
                </Button>  
                
                <h2>{contador}</h2>  
                
                <Button variant="contained" onClick={suma}>  
                    +  
                </Button>  
            </div>  

            <Button variant="outlined" onClick={() => onAdd(contador)}>  
                AGREGAR PRODUCTO  
            </Button>  
        </div>  
    );  
};  

export default Counter;