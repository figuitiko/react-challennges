import LabelFilter from './label-filter/LabelFilter'
import ReactionTimeWrapper from './reaction-time/ReactionTimeWrapper'
import SignUpForm from './sign-up-form/SignUpForm'
import TransferList from './transfer-list/TransferListComponent'
import Tree from './tree/Tree'
import { TicTacToe } from './tic-tac-toe/tic-tac-toe'
export const components = {
  transferlist: TransferList,
  reactionGame: ReactionTimeWrapper,
  signup: SignUpForm,
  'label-filter': LabelFilter,
  tree: Tree,
  'tic-tac-toe': TicTacToe
}
