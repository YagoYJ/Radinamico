import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import theme from "../../styles/theme";
import { Title, Paragraph } from "./styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: theme.colors.darkGray,
    marginBottom: 50,
  },
  media: {
    height: 300,
  },
});

interface MediaCardProps {
  imageUrl: string;
  imageTitle: string;
  title: string;
  paragraph: string;
  slug: string;
}

export default function MediaCard(props: MediaCardProps) {
  const classes = useStyles();

  return (
    <Link to={`anatomia/${props.slug}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title={props.imageTitle}
          />
          <CardContent>
            <Title>{props.title}</Title>
            <Paragraph>{props.paragraph}</Paragraph>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
