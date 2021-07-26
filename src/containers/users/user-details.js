import { initialUserState } from "../../reducers/users";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import UserDataService from "../../services/user-service";
import { deleteUser, updateUser } from "../../actions/users";



const UserDetails = (props) => {

    const [currentUser, setCurrentUser] = useState(initialUserState);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const getUser = id => {
        UserDataService.get(id)
            .then(response => {
                setCurrentUser(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getUser(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const updateStatus = status => {
        const data = {
            id: currentUser.id,
            title: currentUser.title,
            description: currentUser.description,
            published: status
        };

        dispatch(updateUser(currentUser.id, data))
            .then(response => {
                console.log(response);

                setCurrentUser({ ...currentUser, published: status });
                setMessage("The status was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateContent = () => {
        dispatch(updateUser(currentUser.id, currentUser))
            .then(response => {
                console.log(response);

                setMessage("The user was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const removeUser = () => {
        dispatch(deleteUser(currentUser.id))
            .then(() => {
                props.history.push("/users");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
          {currentUser ? (
            <div className="edit-form">
              <h4>User</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={currentUser.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={currentUser.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstNlastnameame"
                    name="lastname"
                    value={currentUser.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={currentUser.email}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
    
              
    
              <button className="btn btn-primary" onClick={removeUser}>
                Delete
              </button>
    
              <button
                type="submit"
                className="btn btn-primary"
                onClick={updateContent}
              >
                Update
              </button>
              <p>{message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a User...</p>
            </div>
          )}
        </div>
      );
    };



export default UserDetails;
