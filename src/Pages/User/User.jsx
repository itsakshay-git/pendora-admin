import React from "react";
import styles from "./User.module.css";

const User = () => {
  return (
    <>
      <div className={styles.usercontainer}>
        <h3>Users</h3>
        <div className={styles.cards}>
          <div className={styles.usercard}>
            <div>
              <h1>40/62</h1>
              <p>UC User / Seat</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 640 512"
              >
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
              </svg>
            </div>
          </div>
          <div className={styles.usercard}>
            <div>
              <h1>131/131</h1>
              <p>SBE User / Seat</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
          </div>
          <div className={styles.usercard}>
            <div>
              <h1>0</h1>
              <p>Common Seat</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
          </div>
          <div className={styles.usercard}>
            <div>
              <h1>0</h1>
              <p>Vertual Extension</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M38.3 241.3L15.1 200.6c-9.2-16.2-8.4-36.5 4.5-50C61.4 106.8 144.7 48 256 48s194.6 58.8 236.4 102.6c12.9 13.5 13.7 33.8 4.5 50l-23.1 40.7c-7.5 13.2-23.3 19.3-37.8 14.6l-81.1-26.6c-13.1-4.3-22-16.6-22-30.4V144c-49.6-18.1-104-18.1-153.6 0v54.8c0 13.8-8.9 26.1-22 30.4L76.1 255.8c-14.5 4.7-30.3-1.4-37.8-14.6zM32 336c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V336zm0 96c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V432zM144 320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V336zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V336zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V432c0-8.8 7.2-16 16-16zM128 432c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V432z" />
              </svg>
            </div>
          </div>
          <div className={styles.usercard}>
            <div>
              <h1>0</h1>
              <p>Vertual Extension Unlim</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M38.3 241.3L15.1 200.6c-9.2-16.2-8.4-36.5 4.5-50C61.4 106.8 144.7 48 256 48s194.6 58.8 236.4 102.6c12.9 13.5 13.7 33.8 4.5 50l-23.1 40.7c-7.5 13.2-23.3 19.3-37.8 14.6l-81.1-26.6c-13.1-4.3-22-16.6-22-30.4V144c-49.6-18.1-104-18.1-153.6 0v54.8c0 13.8-8.9 26.1-22 30.4L76.1 255.8c-14.5 4.7-30.3-1.4-37.8-14.6zM32 336c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V336zm0 96c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V432zM144 320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V336zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V336zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V432c0-8.8 7.2-16 16-16zM128 432c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V432z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.usercontainer}>
        <h3>Seat Summary</h3>
        <table cellspacing="0">
          <tr>
            <th>Service Name</th>
            <th>Present Seat</th>
            <th>Used Days</th>
            <th>Mounthly Rate</th>
            <th>Prorate Seat Charges</th>
          </tr>
          <tr>
            <td>WS-Element</td>
            <td>1</td>
            <td>25</td>
            <td>$145</td>
            <td>$1500</td>
          </tr>
          <tr>
          <td>WS-communicator</td>
            <td>1</td>
            <td>25</td>
            <td>$1500</td>
            <td>$100</td>
          </tr>
          <tr>
          <td>SmartBox-Eenterprise</td>
            <td>131</td>
            <td>2325</td>
            <td>$15.0</td>
            <td>$1162.50</td>
          </tr>
          <tr>
          <td>Business Basic</td>
            <td>1</td>
            <td>25</td>
            <td>$17</td>
            <td>$14</td>

          </tr>
          <tr>
          <td>Call Center</td>
            <td>59</td>
            <td>1475</td>
            <td>$44</td>
            <td>$2210</td>
          </tr>
        </table>
      </div>
      <div className={styles.usercontainer}>
        <h3>User Views</h3>
        <select>
          <option value="Action">Action</option>
          <option value="Action1">test</option>
          <option value="Action2">test</option>
          <option value="Action3">test</option>
        </select>
        <select>
          <option value="All">All</option>
          <option value="Action1">test</option>
          <option value="Action2">test</option>
          <option value="Action3">test</option>
        </select>
        <input type="text"/>
        <button>Go</button>
        <div className={styles.tablebox}>
        <table cellspacing="0">
          <tr>
            <th> Service Name</th>
            <th>Present Seat</th>
            <th>Used Days</th>
            <th>Mounthly Rate</th>
            <th>Prorate Seat Charges</th>
          </tr>
          <tr>
            <td> WS-Element</td>
            <td>1</td>
            <td>25</td>
            <td>$145</td>
            <td>$1500</td>
          </tr>
          <tr>
          <td> WS-communicator</td>
            <td>1</td>
            <td>25</td>
            <td>$1500</td>
            <td>$100</td>
          </tr>
          <tr>
          <td> SmartBox-Eenterprise</td>
            <td>131</td>
            <td>2325</td>
            <td>$15.0</td>
            <td>$1162.50</td>
          </tr>
          <tr>
          <td> Business Basic</td>
            <td>1</td>
            <td>25</td>
            <td>$17</td>
            <td>$14</td>

          </tr>
          <tr>
          <td> Call Center</td>
            <td>59</td>
            <td>1475</td>
            <td>$44</td>
            <td>$2210</td>
          </tr>
        </table>
        </div>
      </div>
    </>
  );
};

export default User;
