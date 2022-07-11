import React , {useState}from 'react'
// import { Card } from './Card'


export const Head = (props) => {
  
    
   
    return (
        <div>
            <section>
                <header className='header' >
                    <div className="container-fluid">
                        <div className="container">
                            <h1 className="text-center pt-5"> Recipe search APi</h1>
                            <form method='post' className='d-flex mt-5' onSubmit={props.sub}  >
                                <input type="text" className='form-control ' onChange={props.inputChangeValue} placeholder="Search here" value={props.inputvalue} />
                                <input  className='btn btn-primary ml-2'type="submit" />
                            </form>
                        </div>
                    </div>
                </header>
            </section>
        </div>
    )
}
