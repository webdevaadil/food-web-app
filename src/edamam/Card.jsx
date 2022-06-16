import React  from 'react'

export const Card = (props) => {
 
    return (
        <div className='container'>
            <div className="alert alert-info mt-2">
                Food Recepises
            </div>
            <div className="row mt-5">
                {props.recipedata.map((items,index) => {
                    console.log(items);
                    return(
                        <div className="col-sm-3">
                        <div className="card">
                            <img src={items.recipe.image} alt="" />
                            <div className="card-body">
                                <p>{items.recipe.label}</p>
                                <ul className='recipe_data'>
                                    {items.recipe.ingredientLines.map((itemsnew, indexnew)=>{
                                       return(<li key={itemsnew}>{itemsnew}</li>)
                                    })}
                                </ul>
                                <a to="" className='btn btn-primary'>Read More</a>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}
