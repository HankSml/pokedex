import './DamageClassBadge.css';

const uri = 'https://www.smogon.com/dex/media/images/'

const classMap = {
    'physical': `url(${uri} + physical.svg)`,
    'special': `url(${uri} + special.svg)`,
    'status': `url(${uri} + non-damaging.svg)`
}

export default function DamageClassBadge(damageClass) {
    console.log(damageClass)
    return (
        <div className={`damageClassBadge ${damageClass.damageClass}`}>
        </div>
    )
}