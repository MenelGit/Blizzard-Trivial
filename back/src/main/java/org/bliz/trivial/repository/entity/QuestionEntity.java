package org.bliz.trivial.repository.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name="questions")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class QuestionEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
	@Column(name="question_code")
	private Integer questionCode;

	@Column(name="text")
	private String text;

	@OneToMany(mappedBy="question")
	private List<AnswerEntity> answers;

	@ManyToOne
	@JoinColumn(name="category_code")
	private BlizzardGameEntity category;

	@OneToMany(mappedBy="question")
	private List<QuestionsPerGameEntity> questionsPerGames;

//	queryMethods
//	set = list sin repetidos. set = new hashSet.
//	findByQuestionsPerGamesIsCorrectAndgame(integer isCorrect, integer game) en el repositorio de question. Mirar categoría por cada una que encuentre y apuntarlo (en NewQuestionRepository),
//	queda algo como List<Question> findByQuestionsPerGamesIsCorrectAndGame(Integer isCorrect, Integer gameCode);  Ejemplo UserRepository.
//	Guardar el id de la partida al crearla. Si es la primera pregunta de la partida coger una random de todas las preguntas (element.at) findOne math.random.
}