import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import { recipesGraphQL } from '../graphql/queries/recipes';
import { userLikesGraphQL } from '../graphql/queries/userLikes';
import * as _ from 'lodash';
import { Row } from 'antd';
import { Recipe } from '../generated/apollo-components';
import { Loading } from './notify/Loading';
import { Error } from './notify/Error';
import { Warning } from './notify/Warning';
import { RecipeListItem } from './RecipeListItem';

export enum queryEnum {
  userLikes = 'userLikes',
  recipes = 'recipes',
}

type RecipesListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
};

export const RecipeList = ({
  options,
  parentRoute,
  queryType,
}: RecipesListProps) => {
  const query =
    queryType === queryEnum.recipes ? recipesGraphQL : userLikesGraphQL;

  const { loading, data, error } = useQuery(query, options);
  const parentArray = _.get(data, queryType);
  const recipesList = _.map(parentArray, (value) =>
    _.get(value, 'recipe', value),
  );
 
  if (loading) return <Loading />;
  if (error) return <Error errorText={`${error}`} />
  if (recipesList.length === 0) return (
    <Warning
      warningHeader="Uh oh, No Recipes"
      warningText="There aren't any recipes yet, why not add one?"
    />
  );
  return (
    <Row>
      {recipesList.map((recipe: Recipe) => (
        <RecipeListItem
        recipe={recipe}
        parentRoute={parentRoute}
        key={`${recipe.id}-${queryType}`}
      />
      ))}
    </Row>
  );
};
