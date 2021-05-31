import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import theme from "../../styles/theme";
import { CardContainer, Title, TitleContainer } from "./styles";

const useStyles = makeStyles({
  root: {
    width: 345,
    backgroundColor: theme.colors.darkGray,
    marginBottom: 50,
  },

  media: {
    width: "100%",
    height: 300,
  },
});

interface MediaCardProps {
  imageUrl: string;
  imageTitle: string;
  title: string;
  slug: string;
}

export default function MediaCard(props: MediaCardProps) {
  const classes = useStyles();

  return (
    <CardContainer to={`anatomia/${props.slug}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title={props.imageTitle}
          />
          <TitleContainer>
            <Title>{props.title}</Title>
          </TitleContainer>
        </CardActionArea>
      </Card>
    </CardContainer>
  );
}
