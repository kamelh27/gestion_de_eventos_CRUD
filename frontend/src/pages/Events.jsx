import {  useState } from 'react';
const Events = () => {
    const [ filters, setFilters ] = useState({ date: '', location: ''})
    return (
        <div className="min-w-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4">Eventos</h1>
            <div className="flex gap-4 mb-4">
                <input 
                    type="date"
                    value={filters.date} 
                    onChange={e => setFilters({ ...filters, date: e.target.value })}
                    className="p-2 border rounded"
                />
                <input 
                    type="text" 
                    placeholder="Ubicación"
                    value={filters.location}
                    onChange={e => setFilters({ ...filters, location: e.target.value })}
                    className="p-2 border rounded"
                />
                <button  className="bg-blue-500 text-white p-2 rounded">Filtrar</button>
            </div>
        </div>
    )
}

export default Events;