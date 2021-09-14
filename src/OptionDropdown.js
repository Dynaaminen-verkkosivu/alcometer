import React from 'react'

export default function OptionDropdown() {
    const pieces = [];
    for (let i = 1; i <= 6; i++) {
        pieces.push(i);
    }

    return (
        pieces.map(piece => {
            return <option value={piece}>{piece}</option>
        })
    )
}