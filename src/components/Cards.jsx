import Card from './Card';

function Cards({ list }) {
    return (
        <div className='flex justify-center flex-wrap mt-2 py-4 px-12 md:p-0 mb-12 z-10'>
            {list.map((card, i) => (
                <Card card={card} key={i} />
            ))}
        </div>
    )
}

export default Cards
