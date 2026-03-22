import React from 'react'
import stylowanie from '../style/StyleStrona2.module.css'

export const Strona4 = () => {
    return (
        <div>
            <div>
                <p>Style CSS Modules</p>
                <p className={stylowanie.pogrubienie}>Zadania do zrobienia</p>
                <ul>
                    <li className={stylowanie.zielony}>Pouczyć się JSa</li>
                    <li className={stylowanie.zielony}>Pouczyć się CSSa</li>
                    <li className={`${stylowanie.niebieski} ${stylowanie.przekresl}`}>Pouczyć się React</li>
                </ul>
            </div>
            <div style={{ verticalAlign: 'bottom' }}>
                <p>Style Inline Exercise</p>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%', textAlign: 'center', lineHeight: '20px', display: 'inline-block' }}>1</div>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'blue', borderRadius: '50%', display: 'inline-flex', justifyContent: "center", alignItems: "center", }}>2</div>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'green', borderRadius: '50%', display: 'inline-flex', textAlign: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>3</div>
            </div>
            <div>
                <div style={{ backgroundColor: 'bisque', width: '120px', height: '130px', borderRadius: '10px', paddingTop: '15px', marginTop: 10 }}>
                    <div style={{ backgroundColor: 'darkblue', borderRadius: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                            <p>Work</p>
                            <p>...</p>
                        </div>
                        <h4>32hrs</h4>
                        <p style={{ fontSize: '8px', textDecoration: '' }}>Last Week - 36hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
