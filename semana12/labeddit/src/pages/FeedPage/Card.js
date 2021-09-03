import { CardActionArea, CardMedia, Typography } from "@material-ui/core"
import {RecipeCardContent} from "@material-ui/core"





const Card =() =>{
    return(
        <Card>
            <CardActionArea>
                <CardMedia
                component={'img'}
                alt={props.title}
                height={'150px'}
                image={props.image}
                title={props.title}
                />

            <RecipeCardContent>
                <Typography align={'center'}>
                    {props.title.toUpperCase()}
                </Typography>
            </RecipeCardContent>


              
            </CardActionArea>
        </Card>


    )




}

export default Card