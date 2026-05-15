import React from 'react'

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
    const getStatusColor = (status) => {
        switch (status) {
            case "waiting":
                return "var(--warning)"
            case "serving":
                return "var(--success)"
            case "completed":
                return "var(--info)"
            default:
                return "var(--text)"
        }
    }
    return (
        <div className='queue-display'>
            <h2>Current Queue</h2>
            {queue.length === 0 ?
                (
                    <p className='empty-queue'>No customers in the queue.</p>
                ) :
                (
                    <div className="queue-list">
                        {queue.map((customer) => (
                            <div className="queue-item" key={customer.id}>
                                <div className="customer-info">
                                    <h3>{customer.name}</h3>
                                    <p>{customer.service}</p>
                                    <span className='status' style={{ backgroundColor: getStatusColor(customer.status) }}>
                                        {customer.status}
                                    </span>
                                </div>
                                <div className="actions">
                                    {customer.status === "waiting" && (
                                        <button
                                            className='serve-btn'
                                            onClick={() => onUpdateStatus(customer.id, "serving")}>Serve</button>
                                    )}
                                </div>
                                <div className="actions">
                                    {customer.status === "serving" && (
                                        <button
                                            className='complete-btn'
                                            onClick={() => onUpdateStatus(customer.id, "completed")}>Complete</button>
                                    )}
                                </div>
                                <button className='remove-btn' onClick={() => onRemove(customer.id)}>Remove</button>    
                            </div>
                        ))}
                    </div>
                )}

        </div>
    )
}

export default QueueDisplay