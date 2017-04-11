export MovieSchema from "./models/MovieModel";
export CommentSchema from "./models/CommentModel";
export {getMovieModel} from "./factories/MovieFactory";
export {getCommentModel} from "./factories/CommentFactory";
export ConnectionProvider from "./dataAccess/connectionProvider";
export pushNotification from "./pushNotifications/mqtt";
export {settings} from "./configuration/index";
