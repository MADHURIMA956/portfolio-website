import './skillList.scss';

export default function SkillList({id,title , active , setSelect}) {
    return (
        <li className={active ? 'skillList active' : 'skillList'} onClick={() => setSelect(id)}>
            {title}
        </li>
    )
}
