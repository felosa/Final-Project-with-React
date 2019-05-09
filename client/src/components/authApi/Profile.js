import React, { Component } from 'react'
// import ProfileImage from '../../images/avatar.png'
// import ProfileService from "../../service/profile-service";
// import EditProfileForm from './EditProfileForm';
// import Calendar from './Calendar';
// import './Profile.css'
// import RecipeUserCollection from './RecipeUserCollection'

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// function TabContainer(props) {
//   return ( <Typography component="div" style={{ padding: 8 * 3 }}>{props.children}</Typography> );
//  }

// TabContainer.propTypes = { children: PropTypes.node.isRequired };

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// });

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // recipes: [],
            // value: "0",
            loggedInUser: null
        }
        // this.service = new ProfileService();
    }

    // handleChange = (event, value) => { this.setState({ value }) };

    // getSavedRecipes = () => {
    //     return this.service.getSavedRecipes()
    //         .then(recipe => {
    //             console.log(recipe)
    //             this.setState({ recipes: recipe.recipes })
    //         })
    // }

    // componentDidMount() { this.getSavedRecipes() }

    render() {
      // const { classes } = this.props;
      // const { loggedInUser } = this.props
      // console.log(loggedInUser)

      return (
        <div>
        <main>
          <header className = "profile-header text-center p-3 pt-5">
            <div className = "user-greeting pt-5" >
              <h2><span>Hello</span>
               {/* {loggedInUser.username}! */}
               </h2>
            </div>
          </header>
        </main>
        </div>
      )
    }
  }


export default Profile;