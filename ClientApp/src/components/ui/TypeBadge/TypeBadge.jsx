import './TypeBadge.css';

export default function TypeBadge ({ type }) {
    return (
        <div className={`typeBadge ${type}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
    )
}