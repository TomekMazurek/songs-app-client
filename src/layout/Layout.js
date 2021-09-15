import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
    return (
        <div className={classes.layout}>
            <MainNavigation/>
            {/*//sidebar*/}
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;
