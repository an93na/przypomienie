import React from 'react'

export const ComponentMetric = () => {
    return (
        <div style={{ margin: '5vh' }}>
            <div style={{ backgroundColor: 'bisque', width: '120px', height: '130px', borderRadius: '10px', paddingTop: '15px', marginTop: 10 }}>
                <div style={{ backgroundColor: 'darkblue', borderRadius: '10px', padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                        <p>Work</p>
                        <p>...</p>
                    </div>
                    <h4>32hrs</h4>
                    <p style={{ fontSize: '8px', textDecoration: '' }}>Last Week - 36hrs</p>
                </div>
            </div>
        </div>
    )
}
