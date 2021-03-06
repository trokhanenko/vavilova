<?php

namespace Drupal\webform\Plugin\WebformHandler;

use Drupal\webform\WebformHandlerBase;

/**
 * Defines a fallback plugin for missing webform handler plugins.
 *
 * @WebformHandler(
 *   id = "broken",
 *   label = @Translation("Broken/Missing"),
 *   category = @Translation("Broken"),
 *   description = @Translation("Broken/missing webform handler plugin."),
 *   cardinality = \Drupal\webform\WebformHandlerInterface::CARDINALITY_UNLIMITED,
 *   results = \Drupal\webform\WebformHandlerInterface::RESULTS_IGNORED,
 *   submission = \Drupal\webform\WebformHandlerInterface::SUBMISSION_OPTIONAL,
 * )
 */
class BrokenWebformHandler extends WebformHandlerBase {

  /**
   * {@inheritdoc}
   */
  public function isEnabled() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getSummary() {
    $t_args = ['%label' => $this->getLabel(), '@id' => $this->getHandlerId()];
    return [
      'message' => [
        '#markup' => $this->t('This handler is broken or missing. You might need to enable the original module.', $t_args),
      ],
    ];
  }

}
