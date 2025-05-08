import style from './style.module.scss'
import {Link} from "react-router-dom";

interface IProps {
    title: string;
}


const Header = ({title}: IProps) => {

    return (
        <header className={`${style.headFoot} ${style.flex}`}>
            <div className={`${style.container} ${style.headFootWrapper}`}>
                <h2 className={style.headLink}>
                    <Link to="/">{title}</Link>
                </h2>
                <h3>
                    <a href="#">Огромный выбор продуктов на ваш вкус!</a>
                </h3>
                <h3 className={style.headLink}>
                    <Link to='/'>Главная страница</Link>
                </h3>
            </div>
            <div className={`${style.container} ${style.headFootWrapper}`}>
                <h3 className={`${style.headLink}`}>
                  <a href='' target='_blank'>Ссылка на репозиторий</a>
								</h3>
                <h3 className={`${style.headLink}`}>
                  <Link to='/contacts' target='_self'>Contacts</Link>
                </h3>
                <h3 className={`${style.headLink}`}>
                  <Link to='/about' target='_self'>About</Link>
                </h3>
            </div>
        </header>
    )

}

export {Header}
