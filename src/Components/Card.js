import styles from './Card.module.css'

const Card = (data) => {
    const info = data.data

    return (
        <>
            {info && info.map(card => {
                
                if(card.origin.name === 'unknown'){
                    card.origin.name = 'Desconhecido'
                }
                if(card.species === 'unknown'){
                    card.species = 'Desconhecida'
                }
                if (card.status === 'unknown'){
                    card.status = '🟡 Desaparecido'
                }
                if (card.status === 'Alive') {
                    card.status = '🟢 Vivo'
                }
                if (card.status === 'Dead') {
                    card.status = '🔴 Morto'
                }
                if(card.gender === 'Male'){
                    card.gender = 'Homem'
                }
                if(card.gender === 'Female'){
                    card.gender = 'Mulher'
                }
                if(card.species === 'Human'){
                    card.species = 'Humano'
                }
                if(card.type === ''){
                    card.type = 'Desconhecido'
                }
                return (
                    <div className={styles.card} key={card.id}>
                        <img src={card.image} alt={card.name} title={card.name} />
                        <div className={styles.card_info}>
                            <h1>{card.name}</h1>
                            <p>Status: {card.status}</p>
                            <p>Gênero: {card.gender}</p>
                            <p>Especie: {card.species}</p>
                            <p>Último lugar avistado: {card.location.name}</p>
                            <p>Origem: {card.origin.name}</p>
                            <p>Tipo: {card.type}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card