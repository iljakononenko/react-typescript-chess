import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures:FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className={'lost'}>
            <h3 style={{marginBottom: 6}}>{title}</h3>
            <div style={{display: "flex"}}>
                {figures.map(figure =>
                    <div style={{display: 'flex'}} key={figure.id}>
                        {figure.logo && <img width={24} height={24} src={figure.logo} alt=""/>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LostFigures;
