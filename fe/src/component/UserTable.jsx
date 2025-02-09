import React from 'react'
import '../assets/css/UserTable.css'
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
const UserTable = () => {
    return (
        <div className='table-container'>
            {<HeaderComp />}
            <div className='user-table-container'>
                <h2>User List</h2>
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th>userID</th>
                            <th>fullName</th>
                            <th>password</th>
                            <th>roleID</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody id="userTableBody">
                        {/* <!-- Dữ liệu sẽ chèn vào đây --> */}
                    </tbody>
                </table>
                
                </div>{<FooterComp />}
        </div>
    )
}

export default UserTable