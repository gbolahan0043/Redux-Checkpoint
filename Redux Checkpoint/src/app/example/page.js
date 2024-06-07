import styles from  './example.module.css'

const ExamplePage = () =>{

    // const abc = {
    //     display: 'flex',
    //     padding: '60px',
    //     backgroundColor: 'black',
    //     color: 'white',
    // }

    return(
        <div className={styles.myHeader}>
             <div className= {styles.hand}>Number 1</div>
             <div>Number 2</div>
            <div>Number 3</div>
        </div>
    )
};

export default ExamplePage;