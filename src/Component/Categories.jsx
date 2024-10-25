import React from 'react'
import '../CSS/Categories.css'

const Categories = () => {

    let categories = ['Travel' , 'Home' , 'Office' , 'Kitchen' , 'Fashion' , 'Furniture' , 'Books' , 'Lighting' , 'Tech' , 'Decor' , 'Bath & Bed' , 'More'];

  return (
    <div className='categories'>

            <div className="categoriesContainer">{
                categories.map((el , i) => (
                    <div key={i} className="category">
                        <h1>
                            {el}
                        </h1>
                    </div>
                ))
            }</div>
        
      
    </div>
  )
}

export default Categories
