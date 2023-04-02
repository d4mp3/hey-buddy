import Card from './Card';

function Cards({ list }) {
    return (
        <div className='flex justify-center flex-wrap py-4 px-12'>
            {list.map((card, i) => (
                <Card card={card} key={i} />
            ))}
        </div>
    )
}

export default Cards
