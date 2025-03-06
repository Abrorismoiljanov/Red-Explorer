import './style.css'

function ListCard(){


    return(
        <div className="listcard">
        <h1>Categories</h1>
        <ul>
            <li><h2>Europe</h2> <h2 className='num'>({0})</h2></li>
            <li><h2>Mountains</h2> <h2 className='num'>({0})</h2></li>
            <li><h2>Traveling Video</h2> <h2 className='num'>({0})</h2></li>
            <li><h2>Beaty of Seas</h2> <h2 className='num'>({0})</h2></li>
            <li><h2>Cusine</h2> <h2 className='num'>({0})</h2></li>
            <li><h2>Guides for Traveler</h2> <h2 className='num'>({0})</h2></li>
            <li><h2>Others</h2><h2 className='num'>({0})</h2></li>
        </ul>
        </div>


    );


}
export default ListCard