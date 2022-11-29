import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Box } from "./Box";
import { ThemeProvider } from "styled-components";

import {theme} from '../theme.js';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { GlobalStyle } from "./GlobalStyle.js";


export const App = () => {
  return (
    <>
      <Box >
          <Profile user={user} />
          <Statistics title={"Upload stats"} stats={data} />
          <FriendList friends={friends} />
          <TransactionHistory transactions={transactions} />
      </Box>
      <GlobalStyle/>
    </>
  );
};