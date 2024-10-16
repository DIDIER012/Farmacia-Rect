import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";  
import Badge from "@mui/material/Badge";  

const CartWidget = (active) => {  
    return (  
        <div onClick={active} className="flex justify-center items-center  cursor-pointer relative">  
            <Badge badgeContent={0} color="primary" max={50} showZero={true}>  
                <ShoppingCartIcon className="text-gray-800"/>  
            </Badge>  
        </div>  
    );  
};  

export default CartWidget;